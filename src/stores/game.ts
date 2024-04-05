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
        },
        /**
         * Returns a function which can be called to safely calculate how much exp
         * it will cost to purchase a new rank of a skill.
         * 
         * @param new_rank What rank the new skill will be at
         * @param skill_id The string name of the skill to return the rank of
         * @returns The experience cost of that skill (unmodified)
         */
        getSkillRankCost: (state) => (skill_id: string, new_rank: number) => {
            const skill = state.skills.find(s => s.name === skill_id);
            if (skill === undefined) return 0;

            let multiplier = 1;
            if (skill.rank.toLowerCase() === 'advanced') multiplier = 2;
            if (skill.rank.toLowerCase() === 'mastery') multiplier = 3;
            return new_rank * multiplier;
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