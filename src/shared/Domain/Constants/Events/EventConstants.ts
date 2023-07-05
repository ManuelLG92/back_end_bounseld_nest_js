const EventConstants = () => ({
  messagePatterns: {
    language: {
      findByCode: 'event.language.findByCode',
      findCollectionByCodes: 'event.language.findCollectionByCodes',
    },
    user: {
      findById: 'event.user.findById',
    },
  },
});

export default EventConstants();
