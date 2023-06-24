import { BlocContainer } from "./BlocContainer";
import { BlocType, IBloc } from "./ibloc";

export enum BorderType {
    NORTH,
    SOUTH,
    EAST,
    WEST,
    CENTER,
}

export class BlocBorder extends BlocContainer {
    type: BlocType = BlocType.BORDER_LAYOUT;
    current_position: BorderType = BorderType.NORTH;

    north: IBloc | undefined;
    south: IBloc | undefined;
    east: IBloc | undefined;
    west: IBloc | undefined;
    center: IBloc | undefined;


    addChilden(children: IBloc[]): void {
        switch (this.current_position) {
            case BorderType.NORTH:
                this.north = children[0];
                this.current_position = BorderType.SOUTH;
                break;
            case BorderType.SOUTH:
                this.south = children[0];
                this.current_position = BorderType.EAST;
                break;
            case BorderType.EAST:
                this.east = children[0];
                this.current_position = BorderType.WEST;
                break;
            case BorderType.WEST:
                this.west = children[0];
                this.current_position = BorderType.CENTER;
                break;
            case BorderType.CENTER:
                this.center = children[0];
                this.current_position = BorderType.NORTH;
                break;
        }
        this.children?.push(...children);
    }
    removeChild(child: IBloc): IBloc {
        let index = this.children?.indexOf(child)!;
        if (index > -1) {
            this.children?.splice(index!, 1);
            return child;
        }
        throw new Error("The specified bloc doesn't exist!");
    }

    setNorth(child: IBloc) {
        if (this.north) {
            this.removeChild(this.north);
        }
        this.current_position = BorderType.NORTH;
        this.addChilden([child]);
    }
    setSouth(child: IBloc) {
        if (this.south) {
            this.removeChild(this.south);
        }
        this.current_position = BorderType.SOUTH;
        this.addChilden([child]);
    }
    setEast(child: IBloc) {
        if (this.east) {
            this.removeChild(this.east);
        }
        this.current_position = BorderType.EAST;
        this.addChilden([child]);
    }
    setWest(child: IBloc) {
        if (this.west) {
            this.removeChild(this.west);
        }
        this.current_position = BorderType.WEST;
        this.addChilden([child]);
    }
    setCenter(child: IBloc) {
        if (this.center) {
            this.removeChild(this.center);
        }
        this.current_position = BorderType.CENTER;
        this.addChilden([child]);
    }
}