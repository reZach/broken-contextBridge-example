# broken-preload-example
This is a MVP explaining what is broken with the [preload](https://electronjs.org/docs/api/context-bridge) functionality. There is a problem where the ipcRenderer does not have [all methods](https://electronjs.org/docs/api/ipc-renderer) assigned to the object. I suspect this is a problem with preload as a whole but did not test other objects.

## To run
```
git clone https://github.com/reZach/broken-preload-example
cd broken-preload-example
npm i
npm run start
(open dev tools to see message)
```

## Output
What _should_ be displayed are all available methods on ipcRenderer.
[![Console logs of the ipcRenderer](img/snippet.png)]()