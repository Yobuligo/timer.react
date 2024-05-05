class TimerConverterDefault {
  secToMinAndSeconds(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const rest = seconds % 60;

    return `${this.addLeadingZero(min)}:${this.addLeadingZero(rest)}`;
  }

  private addLeadingZero(value: number): string {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }
}

export const TimerConverter = new TimerConverterDefault();
