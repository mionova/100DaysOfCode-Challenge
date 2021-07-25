function executeCallback( callback ) {
  callback();
}

// Print Hello
executeCallback(() => console.log('Hello'));

// Print Goodbye
executeCallback(() => console.log('Goodbye'));
