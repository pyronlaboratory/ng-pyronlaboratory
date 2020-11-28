import { PyronlaboratoryCorePipe } from './pyronlaboratory-core.pipe';

describe('PyronlaboratoryCorePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new PyronlaboratoryCorePipe();

  it('transforms "2" to "8"', () => {
    expect(pipe.transform(2, 3)).toBe(8);
  });

});