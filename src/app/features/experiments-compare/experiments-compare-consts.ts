export const COMPARE_DETAILS_ONLY_FIELDS = [
  'id',
  'name',
  'type',
  'status',
  'last_update',
  'project.name',
  'models.input.name',
  'models.output.name',
  'models.output.model.name',
  'models.output.model.uri',
  'models.output.model.framework',
  'models.output.model.design',
  'models.input.name',
  'models.input.model.name',
  'models.input.model.uri',
  'models.input.model.framework',
  'models.input.model.labels',
  'models.input.model.design',
  'execution.artifacts',
  'container.*',
  'script',
  'tags',
  'published',
  'last_iteration',
  'configuration'
];

export const COMPARE_PARAMS_ONLY_FIELDS = [
  'id',
  'name',
  'type',
  'status',
  'last_update',
  'project.name',
  'tags',
  'published',
  'last_iteration',
  'hyperparams'
];
