import 'pinia'
import { Storage } from '@ionic/storage';
import { PiniaPluginContext } from 'pinia';
import { ref } from 'vue';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    local: Storage
  }
}

export const initializedStores = ref([] as Array<string>);

// declare module 'pinia' {
//   export interface PiniaCustomProperties {
//     isInitialized: Ref<boolean>;
//     setInitialized: (value: boolean) => void;
//   }
// }

// declare module 'pinia' {
//   export interface PiniaCustomStateProperties<S> {
//     initialized: boolean
//   }
// }

export function LocalStoragePlugin({ store }: PiniaPluginContext) {
  // Add isInitialized reactive property
  store.initialized = false;

  // Set up the storage system
  const localStore = new Storage();
  localStore.create().then((storage) => {
    store.local = storage;
    if (typeof store['initialize'] === 'function') {
      store['initialize']().then(() => {
        // Set the flag to true once initialization is complete
        initializedStores.value = [...initializedStores.value, store.$id];
      });
    } else {
      // Directly mark as initialized if there's no initialize function
      initializedStores.value = [...initializedStores.value, store.$id];
    }
  }).catch((error) => {
    console.error('Failed to create local storage:', error);
  });
};