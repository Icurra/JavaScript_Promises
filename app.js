// TODO: Rewrite 'watchTutorialCallback' as a promise

let promise = new Promise((resolve, reject) => {
  let userLeft = Boolean(Math.round(Math.random()));

  if (userLeft) {
    reject(new Error("User left."));
  } else {
    resolve("Thumbs up and Subscribe!");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
