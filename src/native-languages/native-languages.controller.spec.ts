import { Test, TestingModule } from '@nestjs/testing';
import { NativeLanguagesController } from './native-languages.controller';
import { NativeLanguagesService } from './native-languages.service';

describe('NativeLanguagesController', () => {
  let controller: NativeLanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NativeLanguagesController],
      providers: [NativeLanguagesService],
    }).compile();

    controller = module.get<NativeLanguagesController>(
      NativeLanguagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
