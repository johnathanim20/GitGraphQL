import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Profile} from '../screens/Profile.js';
import {Repository} from '../screens/Repository.js';
import {Followers} from '../screens/Followers.js'
import {Following} from '../screens/Following.js'

beforeEach(() => {
    jest.useFakeTimers()
})

it("snapshot1", () => {
    
    const snap = renderer.create(
        (<Profile/>)
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

it("snapshot2", () => {
    
    const snap = renderer.create(
        (<Repository/>)
    ).toJSON();
    expect(snap).toMatchSnapshot();
});
it("snapshot3", () => {
    
    const snap = renderer.create(
        (<Following/>)
    ).toJSON();
    expect(snap).toMatchSnapshot();
});
it("snapshot4", () => {
    
    const snap = renderer.create(
        (<Followers/>)
    ).toJSON();
    expect(snap).toMatchSnapshot();
});