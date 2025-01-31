/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { IconType } from '@elastic/eui';
import { AssetType, ElasticsearchAssetType, KibanaAssetType, ServiceName } from '../../types';

// only allow Kibana assets for the kibana key, ES asssets for elasticsearch, etc
type ServiceNameToAssetTypes = Record<Extract<ServiceName, 'kibana'>, KibanaAssetType[]> &
  Record<Extract<ServiceName, 'elasticsearch'>, ElasticsearchAssetType[]>;

export const DisplayedAssets: ServiceNameToAssetTypes = {
  kibana: Object.values(KibanaAssetType),
  elasticsearch: Object.values(ElasticsearchAssetType),
};

export const AssetTitleMap: Record<AssetType, string> = {
  dashboard: 'Dashboard',
  ilm_policy: 'ILM Policy',
  ingest_pipeline: 'Ingest Pipeline',
  transform: 'Transform',
  index_pattern: 'Index Pattern',
  index_template: 'Index Template',
  component_template: 'Component Template',
  search: 'Saved Search',
  visualization: 'Visualization',
  input: 'Agent input',
  map: 'Map',
  data_stream_ilm_policy: 'Data Stream ILM Policy',
};

export const ServiceTitleMap: Record<ServiceName, string> = {
  kibana: 'Kibana',
  elasticsearch: 'Elasticsearch',
};

export const AssetIcons: Record<KibanaAssetType, IconType> = {
  dashboard: 'dashboardApp',
  index_pattern: 'indexPatternApp',
  search: 'searchProfilerApp',
  visualization: 'visualizeApp',
  map: 'emsApp',
};

export const ServiceIcons: Record<ServiceName, IconType> = {
  elasticsearch: 'logoElasticsearch',
  kibana: 'logoKibana',
};
