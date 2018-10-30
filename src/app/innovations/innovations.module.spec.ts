import { InnovationsModule } from './innovations.module';

describe('InnovationsModule', () => {
  let innovationsModule: InnovationsModule;

  beforeEach(() => {
    innovationsModule = new InnovationsModule();
  });

  it('should create an instance', () => {
    expect(innovationsModule).toBeTruthy();
  });
});
