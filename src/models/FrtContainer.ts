import { Entity, Column } from 'typeorm';

@Entity()
export class FrtContainer {
    @Column({ name: 'C_NUMBER' })
    containerNumber: String;

    @Column({ name: 'F_L' })
    load: String;

    @Column({ name: 'TYPE1' })
    type: String;

    @Column({ name: 'SEAL' })
    seal: String;

    @Column({ name: 'RECEIPT_DATE' })
    arrivalDate: String;

    @Column({ name: 'DEPOT_AVAILABLE' })
    availableFrom: String;

    @Column({ name: 'DEPOT_STORAGE_FROM' })
    storageStart: String;

    @Column({ name: 'DATEOUT' })
    unpackedDate: String;

    @Column({ name: 'WEIGHT' })
    weight: String;
    
    @Column({ name: 'M3' })
    m3: String;
    
    @Column({ name: 'PACKS' })
    packs: String;
    
    @Column({ name: 'PKG_DESC' })
    packType: String;
}