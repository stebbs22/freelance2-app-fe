import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { timer } from 'rxjs';
import { timeInterval, pluck, take } from 'rxjs/operators';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css'],
	providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit {
	proposals: Proposal[];
	errorMessage: string;
	mode = "Observable";

	constructor(
	  private proposalService: ProposalService,
	  private router: Router
	) {}

	ngOnInit() {
	  var time = timer(0, 5000)
	  .pipe(
	  	timeInterval()
	  )

	  time.subscribe(() => this.getProposals());
	}

	getProposals() {
	  this.proposalService.getProposals()
	      .subscribe(
	      	proposals => this.proposals = proposals,
	      	error => this.errorMessage = <any>error
	      );
	}

	goToShow(proposal: Proposal): void {
	  var link = ['/proposal', proposal.id];
	  this.router.navigate(link);
	}
}