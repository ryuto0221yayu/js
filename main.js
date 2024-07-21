'use strict';

{
  function showHeader() {
    console.log('Header');
  }

  // const showUser = async () => {
  //   try {
  //     const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
  //     const users = await response.json();
  //     console.log(users);
  //   } catch (err) {
  //     console.log('Something went wrong getting user date');
  //     console.log('Error log: ' + err);
  //   }
  // };

  function showUser(){
    fetch('https://dotinstall.github.io/setup/fetchapi/users.json')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log('Something went wrong getting user date');
      console.log('Error log: ' + err);
    });
  }

  function showFooter() {
    console.log('Footer');
  }

  showHeader();
  showUser();
  showFooter();
}