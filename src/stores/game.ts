import { defineStore } from 'pinia'

export type CharacterSkill = {
    name: string;
    attribute: string;
    rank: string;
    powers: string[];
}

export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        skills: [] as CharacterSkill[],
        loading: false
    }),
    getters: {
        getAttributes: (state) => {
            return [...new Set(state.skills.map(s => s.attribute))];
        }
    },
    actions: {
        async fetchSkills() {
            if (this.skills.length > 0) {
                console.log('using cached value');
                return;
            }

            this.skills = [];
            this.loading = true;
            try {
                this.skills = await fetch('https://tasu71quaf.execute-api.us-west-2.amazonaws.com/default/sigil-skills-query')
                    .then((response) => {
                        return response.json(); 
                    }) 
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        }
    }
});