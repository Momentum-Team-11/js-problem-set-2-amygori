/* eslint no-undef: "off" */

var assert = chai.assert

describe('remove', function () {
  it('returns an array with the element removed', function () {
    assert.deepEqual(
      ['Cadence', 'Ordel'],
      remove(['Cadence', 'Ordel', 'Marion'], 'Marion')
    )
  })

  it('returns the same array if the element is not in the array', function () {
    assert.deepEqual(
      ['Cadence', 'Ordel', 'Marion'],
      remove(['Cadence', 'Ordel', 'Marion'], 'Riley')
    )
  })

  it('removes all incidences of the element', function () {
    assert.deepEqual(
      ['Cadence', 'Ordel'],
      remove(['Cadence', 'Marion', 'Ordel', 'Marion'], 'Marion')
    )
  })
})

describe('remove (preserve original array)', function () {
  it('returns an array with the element removed', function () {
    let array = ['Cadence', 'Ordel', 'Marion']
    assert.deepEqual(
      ['Cadence', 'Ordel'],
      remove(array, 'Marion')
    )
    assert.deepEqual(['Cadence', 'Ordel', 'Marion'], array)
  })

  it('removes all incidences of the element', function () {
    let array = ['Cadence', 'Marion', 'Ordel', 'Marion']
    assert.deepEqual(
      ['Cadence', 'Ordel'],
      remove(array, 'Marion')
    )

    assert.deepEqual(['Cadence', 'Marion', 'Ordel', 'Marion'], array)
  })
})

describe('sum', function () {
  it('returns 0 for an empty array', function () {
    assert.equal(0, sum([]))
  })

  it('works with only one number in the array', function () {
    assert.equal(5, sum([5]))
  })

  it('adds up all the numbers in an array', function () {
    assert.equal(15, sum([1, 2, 3, 4, 5]))
  })
})

describe('average', function () {
  it('returns undefined for an empty array', function () {
    assert.isUndefined(average([]))
  })

  it('works with only one number in the array', function () {
    assert.equal(5, average([5]))
  })

  it('returns the average of an array', function () {
    assert.equal(3, average([1, 2, 3, 4, 5]))
  })
})

describe('minimum', function () {
  it('returns undefined for an empty array', function () {
    assert.isUndefined(minimum([]))
  })

  it('returns the number for an array with one number', function () {
    assert.equal(1, minimum([1]))
  })

  it('returns the the minimum number in an array of numbers', function () {
    assert.equal(1, minimum([2, 1, 3]))
    assert.equal(-4, minimum([7, 31, -4, 2]))
  })
})

describe('selectionSort', function () {
  it('returns an empty array for an empty array', function () {
    assert.deepEqual([], selectionSort([]))
  })

  it('returns the same array for an array with one number', function () {
    assert.deepEqual([2], selectionSort([2]))
  })

  it('returns the same array for a sorted array', function () {
    assert.deepEqual([2, 4, 10, 12], selectionSort([2, 4, 10, 12]))
  })

  it('returns a sorted array', function () {
    assert.deepEqual([2, 4, 10, 12], selectionSort([4, 2, 12, 10]))
  })
})

describe('textList', function () {
  it('returns an empty string for an empty array', function () {
    assert.equal('', textList([]))
  })

  it('returns a string with no commas for an array of length 1', function () {
    assert.equal('Marion', textList(['Marion']))
  })

  it('returns the elements separated by commas', function () {
    assert.equal('Cadence,Ordel,Marion', textList(['Cadence', 'Ordel', 'Marion']))
  })
})
