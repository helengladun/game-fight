class ImprovedFighter extends Fighter {
  constructor(name, health, power) {
    super(...arguments);
  }

  doubleHit(enemy, points) {
    let doublePoints = points.map((item) => item * 2);
    super.hit(enemy, doublePoints);
  }
}
