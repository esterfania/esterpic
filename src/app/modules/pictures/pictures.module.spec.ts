import { PicturesModule } from './pictures.module';

describe('PicturesModule', () => {
  let picturesModule: PicturesModule;

  beforeEach(() => {
    picturesModule = new PicturesModule();
  });

  it('should create an instance', () => {
    expect(picturesModule).toBeTruthy();
  });
});
