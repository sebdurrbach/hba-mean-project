import { FieldsModule } from './fields.module';

describe('FieldsModule', () => {
  let fieldsModule: FieldsModule;

  beforeEach(() => {
    fieldsModule = new FieldsModule();
  });

  it('should create an instance', () => {
    expect(fieldsModule).toBeTruthy();
  });
});
