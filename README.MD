<p align="center">
  <img src="https://imgur.com/s94Dk0j.png" width="720" title="Whatsapp">
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <a href="https://github.com/HubertRyanOfficial/react-blockpress-hook"><img src="https://img.shields.io/github/stars/HubertRyanOfficial/react-blockpress-hook"></a>
  <a href="https://www.npmjs.com/package/react-blockpress-hook"><img src="https://img.shields.io/npm/dm/react-blockpress-hook.svg"></a> 
</p>

# useBlockPress (react-hook)

A react hook to help you take care of clicks loops by users and avoid conflicts in the backend with queries. 😍😆😎
Remembering that if you want to read the article on Medium, here is the link: https://medium.com/@hubertryanofficial

```sh
$ yarn add react-blockpress-hook

or

$ npm install react-blockpress-hook --save
```

## Quick Start

**useLastCall** library was created to avoid a lot a clicks by bad users and take action on that user by identifying multiple clicks on a certain functionality.

As we use react's own hooks, we recommend using the react version from **16.8** onwards, thus making it possible to use the useEffect and useState hooks.

## How to apply

One of the examples is avoid bad users make a lot of queries trying to bug the app engine or something like that, that's why the i developed this library hook. The first of all we need to specific two parameters of hook: onPress and onBlockPress. Below is saying more how we can use with examples!

```js
...

import useBlockPress from "react-blockpress-hook";

const UseBlockButton = () => {
  const blockButtonClick = useBlockButton(onClick, blockButtonListener);

  function onClick() {
    console.log('Hello');
  }

  function blockButtonListener() {
    console.log('User onPress function blocked for some time.');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={blockButtonClick}>
        <View>
          <Text>Clique aqui</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

```

In this example I'm not specifying how long the user will be blocked after trying to bypass some function. I'm not specifying how long the user will be blocked after trying to bypass some function. In this hook I thought a lot about how we are going to control this or how we are going to take some action after the user tries to repeat it several times. So we have two more parameters that will help us with this, which are: **maximumClick** and **seconds**.

```js
...

//

const blockButtonClick = useBlockButton(onClick, blockButtonListener, 10, 5000);

```

The third parameter tells us with how many clicks we will say that the user is cheating and we will have to take action so that if it is hit, the blockButtonListener function will be called. The fourth parameter tells us how long the user will be blocked after circumventing the maximum number of attempts or repetitions in a specific component that is executing this function.

### The first parameter

> Important: Obviously the first parameter will tell us which function will be called by the component, and then to pass the function that returns us from the hook to the component..

Below we have a spreadsheet that will help us a little more as we define these parameters.

| Parameters    | Type     | Description                                                                                                                         | Default |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| onPress       | Function | The function that should actually be called by the component, call a query or whatever.                                             | any     |
| blockListener | Function | This function will be called whenever the user is blocked or reaches the limit. So you can better handle what to do with that user. | any     |
| maximumClicks | function | Maximum clicks that we will define what is already a scam                                                                           | 10      |
| seconds       | function | How long in milliseconds (ms) the user will be blocked after reaching the click limit in **maximumClicks**.                         | 5000    |

I hope I helped at least a little you developers.

## You got it! 👍😁

If you want to use it with architectures using **Contexts**, it's very useful too. Remembering that this is so we can store the last time the function was called and so we can see the time difference for the execution to go live.

Thank you very much, I hope I have helped the great React community. ❤🙌

<p align="center">
  <img src="https://imgur.com/nIAoYGc.png" width="300" title="Whatsapp">
</p>
