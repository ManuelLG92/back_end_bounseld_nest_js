import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NativeLanguageService } from './native-language.service';
import { NativeLanguage } from './entities/native-language.entity';
import { CreateNativeLanguageInput } from './dto/create-native-language.input';
import { UpdateNativeLanguageInput } from './dto/update-native-language.input';

@Resolver(() => NativeLanguage)
export class NativeLanguageResolver {
  constructor(private readonly nativeLanguageService: NativeLanguageService) {}

  @Mutation(() => NativeLanguage)
  createNativeLanguage(
    @Args('createNativeLanguageInput')
    createNativeLanguageInput: CreateNativeLanguageInput,
  ) {
    return this.nativeLanguageService.create(createNativeLanguageInput);
  }

  @Query(() => [NativeLanguage], { name: 'nativeLanguage' })
  findAll() {
    return this.nativeLanguageService.findAll();
  }

  @Query(() => NativeLanguage, { name: 'nativeLanguage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.nativeLanguageService.findOne(id);
  }

  @Mutation(() => NativeLanguage)
  updateNativeLanguage(
    @Args('updateNativeLanguageInput')
    updateNativeLanguageInput: UpdateNativeLanguageInput,
  ) {
    return this.nativeLanguageService.update(
      updateNativeLanguageInput.id,
      updateNativeLanguageInput,
    );
  }

  @Mutation(() => NativeLanguage)
  removeNativeLanguage(@Args('id', { type: () => Int }) id: number) {
    return this.nativeLanguageService.remove(id);
  }
}
