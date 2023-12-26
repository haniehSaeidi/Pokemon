import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Filter from '../components/Filter.vue';


describe('Filter component', () => {

  it('emits "updateFilter" with "all" when a user selects "all" option', async () => {
    const wrapper = mount(Filter);

    await wrapper.find('input#all').trigger('change');

    const updateFilterEvents = wrapper.emitted('updateFilter');

    expect(updateFilterEvents).toBeTruthy();

    if (updateFilterEvents) {
      expect(updateFilterEvents[0]).toEqual(['all']);
    }
    
  });

  it('emits "updateFilter" with "physical" when a user selects "physical" option', async () => {
    const wrapper = mount(Filter);

    await wrapper.find('input#physical').trigger('change');

    const updateFilterEvents = wrapper.emitted('updateFilter');

    expect(updateFilterEvents).toBeTruthy();

    if (updateFilterEvents) {
      expect(updateFilterEvents[0]).toEqual(['physical']);
    }

  });

  it('emits "updateFilter" with "special" when a user selects "special" option', async () => {
    const wrapper = mount(Filter);

    await wrapper.find('input#special').trigger('change');

    const updateFilterEvents = wrapper.emitted('updateFilter');

    expect(updateFilterEvents).toBeTruthy();

    if (updateFilterEvents) {
      expect(updateFilterEvents[0]).toEqual(['special']);
    }

  });

  it('emits "updateFilter" with "status" when a user selects "status" option', async () => {
    const wrapper = mount(Filter);

    await wrapper.find('input#status').trigger('change');

    const updateFilterEvents = wrapper.emitted('updateFilter');

    expect(updateFilterEvents).toBeTruthy();

    if (updateFilterEvents) {
      expect(updateFilterEvents[0]).toEqual(['status']);
    }

  });

});