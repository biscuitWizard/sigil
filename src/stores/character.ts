import { defineStore } from 'pinia'
import { useGameStore } from './game';

/**
 * A transaction log is just a note describing why we adjusted
 * a user's currency. In most cases this is probably just XP spending
 */
export type TransactionLog = {
  reason: string;
  amount: number;
  subject?: string;
  type?: string;
}

export type Character = {
  id: number;
  name: string;
  skills: Record<string, number>;
  experience: TransactionLog[];
}

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    currentCharacter: {id: 0, name: '', skills: {}, experience: [{reason: 'New Character', amount: 42}]} as Character,
    characters: [] as Character[],
    loading: false
  }),
  getters: {
    /**
     * Returns a function which can be called to safely check the rank a character
     * has a certain skill.
     * @param character The character for which to check
     * @param skill_id The string name of the skill to return the rank of
     * @returns The 0-3 rank value of that skill.
     */
    getCharacterSkillRank: (state) => {
      return (character: Character, skill_id: string) => skill_id in character.skills ? character.skills[skill_id] : 0;
    },
  },
  actions: {
    async newCharacter() {
      this.currentCharacter = {
        name: 'Testeroni',
        experience: [{reason: 'Starting XP', amount: 16}]
      } as Character;
    },
    async purchaseSkillRank(skill_id: string) {
      const currentRank = this.currentCharacter.skills[skill_id] ?? 0;
      const newRank = currentRank + 1;
      const gameStore = useGameStore();
      const cost = gameStore.getSkillRankCost(skill_id, newRank);

      // Make an expenditure log
      this.currentCharacter.experience.push({
        reason: `Purchased ${skill_id} to rank ${newRank}.`,
        subject: skill_id,
        type: 'skill',
        amount: cost * -1 // Spends are always negative
      });

      // Assign the new rank
      this.currentCharacter.skills[skill_id] = newRank;
    },
    async refundSkillRank(skill_id: string) {
      // Check if the skill exists and its rank after decrementing would be 0 or less
      if ((this.currentCharacter.skills[skill_id] ?? 0) - 1 <= 0) {
        // Delete the skill from the skills object if its new rank is 0 or less
        delete this.currentCharacter.skills[skill_id];
      } else {
        // Otherwise, decrease the skill rank by 1
        this.currentCharacter.skills[skill_id] -= 1;
      }
    }
  }
});