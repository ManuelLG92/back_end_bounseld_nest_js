import { Test, TestingModule } from '@nestjs/testing';
import { NativeLanguagesService } from './native-languages.service';

describe('NativeLanguagesService', () => {
  let service: NativeLanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NativeLanguagesService],
    }).compile();

    service = module.get<NativeLanguagesService>(NativeLanguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
