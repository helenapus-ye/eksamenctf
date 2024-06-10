import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'brukere',
    title: 'Brukere',
    type: 'document',
    fields: [
      defineField({
        name: 'brukernavn',
        title: 'Brukernavn',
        type: 'string',
      }),
      defineField({
        name: 'krypterpassord',
        title: 'Kryptert Passord',
        type: 'string',
      }),
      defineField({
        name: 'admin',
        title: 'Er personen admin',
        type: 'boolean',
      }),
      defineField({ 
        name: 'bilde',
        title: 'profilbilde',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    ],
    preview: {
      select: {
        navn: 'brukernavn',
        media: 'bilde',
     
      },
      prepare(selection) {
       
  
        return {
          title: `${selection.navn}`,
          media: selection.media,
        }
      },
    },
  })