class TimerConverterDefault {
  secToTime(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const rest = seconds % 60;

    return `${this.addLeadingZero(min)}:${this.addLeadingZero(rest)}`;
  }

  timeToSeconds(time: string): number {
    const [min, seconds] = time.split(":");
    return parseInt(min) * 60 + parseInt(seconds);
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
