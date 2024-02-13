// main.js
import { h, patch } from 'snabbdom';
import { createTemplate, updateState, onMount } from 'ui-library';

const state = { count: 0 };

function handleClick() {
  updateState({ count: state.count + 1 });
}

const view = createTemplate(state);

const container = document.getElementById('app');
const vnode = patch(container, view);

// Add event listener
const button = document.getElementById('button');
button.addEventListener('click', handleClick);

// Lifecycle events
onMount(() => {
  console.log('Component mounted');
});

updateState({ count: state.count + 1 }); // Test state change lifecycle event
