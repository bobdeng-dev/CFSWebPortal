import {Entity, Column } from 'typeorm';

@Entity()
export class FisJob {
        @Column({name: 'JOB_UNIQUE'})
        jobUnique: String;

        @Column({name: 'JOB'})
        job: String;

        @Column({name: 'SHIPMENT'})
        shipment: String;

        @Column({name: 'HOUSEBILL'})
        housebill: String;

        @Column({name: 'PORT_DEST'})
        portDest: String;

        @Column({name: 'GOODS1'})
        goods: String;

        @Column({name: 'PKGS_MANIFEST'})
        pkgsManifest: String;

        @Column({name: 'PKG_DESC'})
        pkgDesc: String;

        @Column({name: 'ACTUAL_KG'})
        kg: String;

        @Column({name: 'ACTUAL_M3'})
        m3: String;

        @Column({name: 'ACS_RELEASE'})
        acsRelease: String;
}