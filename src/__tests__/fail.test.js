// @flow strict

import { fail } from '../fail';
import { INPUTS } from './fixtures';

describe('fail', () => {
    const decoder = fail('I always fail');
    const not_okay = INPUTS;

    it('valid', () => {
        // Nothing is valid for a failing decoder :)
    });

    it('throws runtime error if inputs are not strings', () => {
        expect(not_okay.length).not.toBe(0);
        for (const value of not_okay) {
            expect(decoder(value).isErr()).toBe(true);
        }
    });
});
