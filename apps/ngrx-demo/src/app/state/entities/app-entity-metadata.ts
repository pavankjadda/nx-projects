import { EntityMetadataMap } from '@ngrx/data';

const pluralNames = { Employee: 'Employees' };

export const entityMetadata: EntityMetadataMap = {
	Employee: {},
};

export const entityConfig = {
	entityMetadata,
	pluralNames,
};
