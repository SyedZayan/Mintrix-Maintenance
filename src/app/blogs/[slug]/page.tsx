"use client";

import React, { use, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  if (!post) {
    notFound();
  }

  // Effect to extract H3 headings from the content for the Sidebar
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const h3Elements = doc.querySelectorAll('h3');
    const extracted = Array.from(h3Elements).map((h3, index) => {
      // Strip any inner HTML tags (like <strong>) just in case, before making the ID
      const cleanText = h3.textContent || "";
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${index}`;
      return { id, text: cleanText };
    });
    setHeadings(extracted);
  }, [post.content]);

  // Function to handle smooth scroll
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounting for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Get two random "Other Articles"
  const otherPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  // We need to inject IDs into the content for the scroll to work
  const contentWithIds = post.content.replace(/<h3>(.*?)<\/h3>/g, (match, content) => {
    // Clean the content of any tags to make a valid ID
    const cleanId = content.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h3 id="${cleanId}">${content}</h3>`;
  });

  return (
    <main className="min-h-screen bg-[var(--color-ecru-white)] pt-32 lg:pt-40 pb-24">
      
      {/* --- HERO BANNER --- */}
      <section className="px-6 md:px-12 mb-12 lg:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-[var(--color-dove-gray)] hover:text-[var(--color-old-gold)] font-bold text-[11px] uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 text-[var(--color-old-gold)] font-bold text-[10px] md:text-[11px] uppercase tracking-widest">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-heavy-metal)] opacity-20" />
              <span className="text-[var(--color-dove-gray)]">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter leading-[1] text-[var(--color-heavy-metal)]">
              {post.title}
            </h1>
            <p className="text-[var(--color-dove-gray)] text-lg md:text-xl font-medium leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <section className="px-6 md:px-12 border-t border-[var(--color-heavy-metal)]/10 bg-white pt-16 lg:pt-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* ARTICLE BODY */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--color-heavy-metal)]/10 shadow-lg"
            >
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </motion.div>

            {/* BULLETPROOF BRAND-COLORED HTML INJECTION */}
            <article 
              className="max-w-none text-[var(--color-heavy-metal)]
                /* Paragraphs */
                [&_p]:text-[var(--color-dove-gray)] [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base md:[&_p]:text-lg
                
                /* Headings */
                [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:font-black [&_h3]:uppercase [&_h3]:tracking-tighter [&_h3]:text-[var(--color-heavy-metal)] [&_h3]:mt-12 [&_h3]:mb-6 [&_h3]:scroll-mt-32
                [&_h4]:text-xl md:[&_h4]:text-2xl [&_h4]:font-bold [&_h4]:text-[var(--color-heavy-metal)] [&_h4]:mt-8 [&_h4]:mb-4
                
                /* Lists (Catches both UL and OL, regardless of nesting) */
                [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:mb-6 [&_ol]:mb-6 
                [&_li]:mb-2 [&_li]:text-[var(--color-dove-gray)] md:[&_li]:text-lg
                
                /* Inline Elements */
                [&_strong]:text-[var(--color-heavy-metal)] [&_strong]:font-bold
                [&_a]:text-[var(--color-old-gold)] hover:[&_a]:text-[var(--color-heavy-metal)] [&_a]:transition-colors [&_a]:underline [&_a]:underline-offset-4
                
                /* Table Styling */
                [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm md:[&_table]:text-base
                [&_th]:bg-[var(--color-heavy-metal)] [&_th]:text-white [&_th]:p-4 [&_th]:text-left [&_th]:font-black [&_th]:uppercase [&_th]:tracking-widest
                [&_td]:p-4 [&_td]:border-b [&_td]:border-[var(--color-heavy-metal)]/10 [&_td]:text-[var(--color-dove-gray)]
                [&_tr:nth-child(even)]:bg-[var(--color-ecru-white)]
                
                /* Blockquote Styling */
                [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-old-gold)] [&_blockquote]:bg-[var(--color-ecru-white)] [&_blockquote]:p-6 md:[&_blockquote]:p-8 [&_blockquote]:my-10 [&_blockquote]:rounded-r-2xl [&_blockquote]:text-xl md:[&_blockquote]:text-2xl [&_blockquote]:font-medium [&_blockquote]:italic [&_blockquote]:text-[var(--color-heavy-metal)] [&_blockquote]:shadow-sm"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </div>

          {/* STICKY SIDEBAR */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              
              <div className="flex items-center justify-between pb-6 border-b border-[var(--color-heavy-metal)]/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--color-heavy-metal)]/10 bg-[var(--color-ecru-white)]">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[var(--color-heavy-metal)] tracking-tight">{post.author.name}</h4>
                    <p className="text-[var(--color-dove-gray)] text-[11px] font-bold uppercase tracking-widest mt-0.5">
                      Published {post.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* DYNAMIC TABLE OF CONTENTS */}
              <div className="space-y-4 pb-6 border-b border-[var(--color-heavy-metal)]/10">
                <h4 className="text-[10px] font-bold text-[var(--color-dove-gray)] uppercase tracking-widest mb-4">In this article</h4>
                {headings.length > 0 ? (
                  headings.map((heading, i) => (
                    <button 
                      key={i} 
                      onClick={() => scrollToHeading(heading.id)}
                      className="flex items-center justify-between group w-full text-left"
                    >
                      <span className="text-sm font-bold text-[var(--color-dove-gray)] group-hover:text-[var(--color-old-gold)] transition-colors truncate pr-4">
                        {heading.text}
                      </span>
                      <ChevronRight size={14} className="text-[var(--color-dove-gray)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-old-gold)] group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))
                ) : (
                  <p className="text-xs text-[var(--color-dove-gray)] italic uppercase tracking-widest">No sections found</p>
                )}
              </div>

              {/* READ NEXT WIDGET */}
              {otherPosts.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold text-[var(--color-dove-gray)] uppercase tracking-widest mb-4">Read Next</h4>
                  <div className="space-y-4">
                    {otherPosts.map((otherPost) => (
                      <Link 
                        key={otherPost.id} 
                        href={`/blogs/${otherPost.slug}`}
                        className="group flex gap-4 items-center bg-[var(--color-ecru-white)] p-3 rounded-xl border border-[var(--color-heavy-metal)]/5 hover:border-[var(--color-old-gold)]/50 hover:shadow-md transition-all"
                      >
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-white">
                          <Image src={otherPost.image} alt={otherPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-[var(--color-old-gold)] uppercase tracking-widest mb-1">{otherPost.category}</span>
                          <h5 className="text-xs font-black text-[var(--color-heavy-metal)] uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-[var(--color-old-gold)] transition-colors">
                            {otherPost.title}
                          </h5>
                          <div className="flex items-center gap-1 text-[9px] font-bold text-[var(--color-dove-gray)] uppercase tracking-widest mt-2">
                            Read <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}