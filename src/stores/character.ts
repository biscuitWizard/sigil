import { defineStore } from 'pinia'

/**
 * A transaction log is just a note describing why we adjusted
 * a user's currency. In most cases this is probably just XP spending
 */
export type TransactionLog = {
  reason: string;
  amount: number;
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
    currentCharacter: {} as Character,
    characters: [] as Character[],
    loading: false
  }),
  actions: {
    async newCharacter() {
      this.currentCharacter = {
        name: 'Testeroni',
        experience: [{reason: 'Starting XP', amount: 16}]
      } as Character;
    }
  }
});