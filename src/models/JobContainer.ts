import { Entity, Column } from 'typeorm';

@Entity()
export class JobContainer {
    @Column({ name: 'C_NUMBER' })
    containerNumber: String;

    @Column({ name: 'PACKS' })
    packs: String;
    
    @Column({ name: 'KG' })
    kg: String;
    
    @Column({ name: 'M3' })
    m3: String;
    
    @Column({ name: 'DAMAGED_PACKS' })
    damagedPacks: String;
    
    @Column({ name: 'PILLAGED_PACKS' })
    pillagedPacks: String;
    
    @Column({ name: 'PKGS_OUTTURN' })
    pkgsOutturn: String;
    
    @Column({ name: 'PKGS_RELEASE' })
    pkgsRelease: String;
    
    @Column({ name: 'KG_OUTTURN' })
    kgOutturn: String;
    
    @Column({ name: 'M3_OUTTURN'})
    m3Outturn: String;
}