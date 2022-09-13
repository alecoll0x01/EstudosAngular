import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
    let service: UniqueIdService = null; beforeEach(() => { service = new UniqueIdService(); });


    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generatedUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });
});