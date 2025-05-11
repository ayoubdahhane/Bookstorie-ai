import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-original-index',
  templateUrl: './original-index.component.html',
  styleUrls: ['./original-index.component.scss']
})
export class OriginalIndexComponent implements OnInit {
  isMobileMenuOpen = false;
  currentSlide = 0;
  sliderInterval: any;
  isLoading = true;

  ngOnInit() {
    // Start the slider when component initializes
    this.startSlider();
    
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    const mobileMenuBtn = event.target.closest('.mobile-menu-btn');
    const navLinks = event.target.closest('.nav-links');
    const mobileMenu = event.target.closest('.mobile-menu');
    
    if (!mobileMenuBtn && !navLinks && !mobileMenu) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  showSlide(index: number) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      (slide as HTMLElement).classList.remove('active');
    });
    slides[index]?.classList.add('active');
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    this.showSlide(this.currentSlide);
  }

  startSlider() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
} 