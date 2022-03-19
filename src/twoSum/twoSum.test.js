import { twoSum } from './index'

describe('twoSum', () => {
  describe('odd number of elements', () => {
    it('indices of the two numbers such that they add up to target', () => {
      const inputArray = [2,7,11,15];
      const target = 9;
      const expectedResult = [0,1];
      expect(twoSum(inputArray, target)).toEqual(expectedResult);
    })
  })

  describe('unmatched target number', () => { 
    it('returns empty array', () => {
      const inputArray = [2,7,11,15];
      const target = 20;
      const expectedResult = [];
      expect(twoSum(inputArray, target)).toEqual(expectedResult);
    })
  })

  describe('even number of elements', () => {
    it('indices of the two numbers such that they add up to target', () => {
      const inputArray = [2,7,11];
      const target = 9;
      const expectedResult = [0,1];
      expect(twoSum(inputArray, target)).toEqual(expectedResult);
    })
  })
})