// src/DnDCharacter.ts
export class DnDCharacter {
    static generateAbilityScore(): number {
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => b - a);
      rolls.pop();
      return rolls.reduce((sum, value) => sum + value, 0);
    }
  
    static generateAbilities(): number[] {
      return Array.from({ length: 6 }, () => this.generateAbilityScore());
    }
  
    static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2);
    }
  
    static calculateHitpoints(con: number): number {
      const modifier = this.getModifierFor(con);
      return 10 + modifier;
    }
  }
  