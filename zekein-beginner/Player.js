class Player {
    constructor() {}
    playTurn(warrior) {
        if (warrior.feel().isEmpty()) {
            if (warrior.health() >= 15) {
                warrior.walk();
            } else {
                warrior.rest();
            }
        } else {
            if (warrior.health() <= 8) {
                warrior.walk('backward');
            } else {
                warrior.attack();
            }
        }
    }
    isEnemyInSight(warrior) {
        const spaceWithUnit = warrior.look().find(space => space.isUnit());
        return spaceWithUnit && spaceWithUnit.getUnit().isEnemy();
    }
}
