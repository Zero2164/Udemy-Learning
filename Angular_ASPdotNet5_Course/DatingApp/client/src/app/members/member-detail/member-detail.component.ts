import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEnvelope, faGlobeAmericas, faHeart, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryOrder } from '@kolkov/ngx-gallery';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member!: Member;
  faVenus = faVenus;
  faMars = faMars; 
  female = 'female';
  male = 'male';
  faGlobeAmericas = faGlobeAmericas;
  faHeart = faHeart;
  faEnvelope = faEnvelope;
  ifHearted = false;
  hearted = 'color: white;';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor(private memberService: MembersService, private route: ActivatedRoute, public toastrService: ToastrService ) { }

  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
        width: '24rem',
        height: '40rem',
        imagePercent: 100,
        thumbnailsColumns: 4,
        thumbnailsRows: 2,
        thumbnailsPercent: 50,
        thumbnailsAutoHide: true,
        preview: false,
        imageArrows: false,
        thumbnailsArrows: false, 
        thumbnailsSwipe: true,
        thumbnailsOrder: NgxGalleryOrder.Row
      }
    ]

  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for(const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        large: photo?.url
      })
    }
    return imageUrls;
  }

  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }

  heartClicked() {
    this.ifHearted = !this.ifHearted;
    if(this.ifHearted) {
      this.hearted = 'color: lightgreen;';
      this.toastrService.success(this.member.knownAs + ' has been added to favourites')
    } 
    else if (!this.ifHearted) {
      this.hearted = 'color: white;';
      this.toastrService.warning(this.member.knownAs + ' has been removed from favourites')
    }
  }


}
