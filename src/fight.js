async function fight(fighter, improvedFighter, ...points) {
  let pointsArr = [...points];
  let pointsArrInt = points.map(item => parseInt(item, 10));

  let fighterHealth = fighter.getHealth();
  let improvedFighterHealth = improvedFighter.getHealth();
  let result = null;

  while (fighterHealth > 0 && improvedFighterHealth > 0) {
    fighter.hit(improvedFighter, pointsArrInt);
    improvedFighterHealth = improvedFighter.getHealth();
    improvedFighter.doubleHit(fighter, pointsArrInt);
    fighterHealth = fighter.getHealth();
  }

  if (fighterHealth <= 0) {
    result = await fighter.knockout();
  }

  if (improvedFighterHealth <= 0) {
    result = await improvedFighter.knockout();
  }

  return result;
}