import { BusModule } from './bus.module';

describe('BusModule', () => {
  let busModule: BusModule;

  beforeEach(() => {
    busModule = new BusModule();
  });

  it('should create an instance', () => {
    expect(busModule).toBeTruthy();
  });
});
