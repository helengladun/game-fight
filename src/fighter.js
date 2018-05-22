class Fighter {
  constructor(name, health = 2000, power = 5) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  getHealth() {
    return this.health;
  }

  getName() {
    return this.name;
  }

  getPower() {
    return this.power;
  }

  setDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
    }
  }

  hit(enemy, points) {
    if (enemy instanceof Fighter) {
      let power = this.getPower();
      let damage = points
        .map(item => item * power)
        .reduce((total, curr) => total + curr);

      console.log(
        `${this.getName()} (${this.getHealth()}) hit ${enemy.getName()} (${enemy.getHealth()}). ${enemy.getName()} has lost ${damage} XP`
      );
      enemy.setDamage(damage);
    } else {
      console.error("Incorrect fighter object given!");
    }
  }

  knockout() {
    let fighterName = this.getName();
    return new Promise((resolve, reject) => {
      return resolve(fighterName);
      console.log("time is over");
      setTimeout(() => {
        return resolve(fighterName);
      }, 500);
    });
  }
}
