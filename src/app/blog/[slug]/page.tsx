"use client";

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get two random "Other Articles" that are not the current post
  const otherPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f9f8ee] pt-32 lg:pt-40 pb-24">
      
      {/* --- HERO BANNER --- */}
      <section className="px-6 md:px-12 mb-12 lg:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-heavy-metal/50 hover:text-old-gold font-bold text-[11px] uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 text-old-gold font-bold text-[10px] md:text-[11px] uppercase tracking-widest">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-heavy-metal/20" />
              <span className="text-heavy-metal/50">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter leading-[1] text-heavy-metal">
              {post.title}
            </h1>
            <p className="text-heavy-metal/70 text-lg md:text-xl font-medium leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <section className="px-6 md:px-12 border-t border-heavy-metal/10 bg-white pt-16 lg:pt-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* ARTICLE BODY */}
          <div className="lg:col-span-8 space-y-10">
            {/* Featured Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-heavy-metal/10 shadow-lg shadow-heavy-metal/5"
            >
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </motion.div>

            {/* Bulletproof Rich Text Content */}
            <article 
              className="max-w-none 
                [&>p]:text-heavy-metal/80 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-base md:[&>p]:text-lg
                [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:font-black [&>h3]:uppercase [&>h3]:tracking-tighter [&>h3]:text-heavy-metal [&>h3]:mt-12 [&>h3]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:text-heavy-metal/80 md:[&>ul>li]:text-lg
                [&>strong]:text-heavy-metal [&>strong]:font-bold
                [&>blockquote]:border-l-4 [&>blockquote]:border-old-gold [&>blockquote]:bg-[#f9f8ee] [&>blockquote]:p-6 md:[&>blockquote]:p-8 [&>blockquote]:my-10 [&>blockquote]:rounded-r-2xl [&>blockquote]:text-xl md:[&>blockquote]:text-2xl [&>blockquote]:font-medium [&>blockquote]:italic [&>blockquote]:text-heavy-metal [&>blockquote]:shadow-sm
                [&>a]:text-old-gold hover:[&>a]:text-heavy-metal [&>a]:transition-colors [&>a]:underline [&>a]:underline-offset-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* STICKY SIDEBAR */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              
              {/* Author Meta */}
              <div className="flex items-center justify-between pb-6 border-b border-heavy-metal/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-heavy-metal/10 bg-heavy-metal/5">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-heavy-metal tracking-tight">{post.author.name}</h4>
                    <p className="text-heavy-metal/50 text-[11px] font-bold uppercase tracking-widest mt-0.5">
                      Published {post.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Table of Contents (Visual) */}
              <div className="space-y-4 pb-6 border-b border-heavy-metal/10">
                <h4 className="text-[10px] font-bold text-heavy-metal/40 uppercase tracking-widest mb-4">In this article</h4>
                {['Introduction', 'The Importance of Proactive Coil Cleaning', 'Smart Climate Control', 'Bridging the Gap Between Code and Hardware'].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-bold text-heavy-metal/70 group-hover:text-old-gold transition-colors truncate pr-4">{item}</span>
                    <ChevronDown size={14} className="text-heavy-metal/30 group-hover:text-old-gold shrink-0" />
                  </div>
                ))}
              </div>

              {/* READ NEXT WIDGET */}
              {otherPosts.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold text-heavy-metal/40 uppercase tracking-widest mb-4">Read Next</h4>
                  <div className="space-y-4">
                    {otherPosts.map((otherPost) => (
                      <Link 
                        key={otherPost.id} 
                        href={`/blog/${otherPost.slug}`}
                        className="group flex gap-4 items-center bg-[#f9f8ee] p-3 rounded-xl border border-heavy-metal/5 hover:border-old-gold/30 hover:shadow-md transition-all"
                      >
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-heavy-metal/5">
                          <Image src={otherPost.image} alt={otherPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[9px] font-bold text-old-gold uppercase tracking-widest mb-1">{otherPost.category}</span>
                          <h5 className="text-xs font-black text-heavy-metal uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-old-gold transition-colors">
                            {otherPost.title}
                          </h5>
                          <div className="flex items-center gap-1 text-[9px] font-bold text-heavy-metal/40 uppercase tracking-widest mt-2 group-hover:text-heavy-metal transition-colors">
                            Read <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Block */}
              <div className="bg-[#f9f8ee] p-6 rounded-2xl border border-heavy-metal/10 text-center shadow-lg shadow-heavy-metal/5 mt-8">
                <h4 className="text-heavy-metal text-sm font-black uppercase tracking-tight mb-2">
                  Weekly Newsletter
                </h4>
                <p className="text-heavy-metal/60 text-[13px] font-medium leading-relaxed mb-5">
                  Get the latest facility management insights delivered directly to your inbox every week.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white border border-heavy-metal/10 rounded-xl py-3 px-4 text-heavy-metal placeholder:text-heavy-metal/40 focus:outline-none focus:border-old-gold focus:ring-1 focus:ring-old-gold text-sm transition-all shadow-sm"
                  />
                  <button className="w-full bg-heavy-metal hover:bg-old-gold text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-md">
                    Subscribe
                  </button>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}