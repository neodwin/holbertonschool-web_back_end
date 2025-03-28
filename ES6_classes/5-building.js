export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
