class IdProviderDefault {
  private cursor = 0;

  next(): number {
    this.cursor++;
    return this.cursor;
  }
}

export const IdProvider = new IdProviderDefault();
