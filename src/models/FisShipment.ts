import {Entity, Column} from 'typeorm';

@Entity('FIS_SHIPMENT')
export class FisShipment {
        @Column({name: 'OCEAN_BILL'})
        oceanBill: String;

        @Column({name: 'SHIPMENT'})
        shipment: String;

        @Column({name: 'BILL_DATE'})
        billDate: String;
        
}