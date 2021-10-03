import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LearningLanguageService } from './learning-language.service';
import { LearningLanguage } from './entities/learning-language.entity';
import { CreateLearningLanguageInput } from './dto/create-learning-language.input';
import { UpdateLearningLanguageInput } from './dto/update-learning-language.input';

@Resolver(() => LearningLanguage)
export class LearningLanguageResolver {
  constructor(
    private readonly learningLanguageService: LearningLanguageService,
  ) {}

  @Mutation(() => LearningLanguage)
  createLearningLanguage(
    @Args('createLearningLanguageInput')
    createLearningLanguageInput: CreateLearningLanguageInput,
  ) {
    return this.learningLanguageService.create(createLearningLanguageInput);
  }

  @Query(() => [LearningLanguage], { name: 'learningLanguage' })
  findAll() {
    return this.learningLanguageService.findAll();
  }

  @Query(() => LearningLanguage, { name: 'learningLanguage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.learningLanguageService.findOne(id);
  }

  @Mutation(() => LearningLanguage)
  updateLearningLanguage(
    @Args('updateLearningLanguageInput')
    updateLearningLanguageInput: UpdateLearningLanguageInput,
  ) {
    return this.learningLanguageService.update(
      updateLearningLanguageInput.id,
      updateLearningLanguageInput,
    );
  }

  @Mutation(() => LearningLanguage)
  removeLearningLanguage(@Args('id', { type: () => Int }) id: number) {
    return this.learningLanguageService.remove(id);
  }
}
