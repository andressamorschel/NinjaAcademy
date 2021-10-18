import { UnitsComponent } from "../units/units.component";

export interface Community {
    id: number;
    address: string;
    name: string;
    parkingSpotPrice: number;
    units: UnitsComponent;
} 

export interface ResponseCommunity{
    id: number;
    address: string;
    name: string;
    parkingSpotPrice: number;
    units: UnitsComponent;
    data: Community[];
}
