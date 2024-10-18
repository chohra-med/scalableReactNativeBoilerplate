/*
    Custom i18n post processor to replace \\n in translation
    with \n to avoid displaying \n but making a real line break
 */
    import { PostProcessorModule } from 'i18next';

    const processor: PostProcessorModule = {
      type: 'postProcessor',
      name: 'newLineProcessor',
      process: function (value) {
        /* return manipulated value */
        return value.replace(/\\n/, '\n');
      },
    };
    
    export default processor;
    