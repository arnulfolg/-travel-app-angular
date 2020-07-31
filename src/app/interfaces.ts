export interface IPlaces {
	place: string;
	id: string;
	description: string;
	image: string;
	categories: Array<string>;
}

export interface ICategories {
	name: string;
	image: string;
	numPlaces: number;
}

export interface IUser {
  uid: string;
  email: string;
  name: string;
}


export interface IDoc {
	docid: string;
	uid: string;
	pid: string;
	likeStatus: number;
	wantToVisit: boolean;
    hadVisited: boolean;
}
