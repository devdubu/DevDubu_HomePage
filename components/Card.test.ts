import { it, expect } from 'vitest'
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Card from './Card.vue'

// tests/App.nuxt.spec.ts
it('can also mount an app', async () => {
    const component = await mountSuspended(Card)
    console.log(component.html())
})