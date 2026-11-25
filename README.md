# orca-bots-demo

Dépôt de démo pour une vidéo sur les bots Orca : un petit calculateur de panier en TypeScript (sous-total, remise, TVA), testé avec Vitest et vérifié par une CI GitHub Actions.

## Lancer les tests

```sh
npm install
npm run lint
npm test
```

## Démo

`main` est vert. Pour faire tomber la CI en direct, pousser la branche piégée :

```sh
git push -u origin demo/bug-plante
```

puis ouvrir une PR vers `main`. Le commit « refacto arrondi remise » casse le test `computeDiscount > arrondit la remise au centime le plus proche`.
